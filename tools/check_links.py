"""Fail when generated MkDocs pages contain broken internal links or assets."""

from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import unquote, urlsplit


SITE_PREFIX = "/sols-leveling-system-wiki/"


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        attribute = "href" if tag in {"a", "link"} else "src" if tag in {"img", "script", "source"} else None
        if attribute and values.get(attribute):
            self.links.append((attribute, values[attribute] or ""))


def target_candidates(source: Path, raw_url: str, site_root: Path) -> list[Path]:
    parsed = urlsplit(raw_url)
    if parsed.scheme or parsed.netloc or raw_url.startswith(("mailto:", "tel:", "data:", "javascript:", "#")):
        return []

    path = unquote(parsed.path).replace("\\", "/")
    if not path:
        return []
    if path.startswith(SITE_PREFIX):
        relative = PurePosixPath(path[len(SITE_PREFIX):])
        target = site_root.joinpath(*relative.parts)
    elif path.startswith("/"):
        relative = PurePosixPath(path.lstrip("/"))
        target = site_root.joinpath(*relative.parts)
    else:
        relative = PurePosixPath(path)
        target = source.parent.joinpath(*relative.parts)

    if path.endswith("/"):
        return [target / "index.html"]
    if target.suffix:
        return [target]
    return [target, target / "index.html", target.with_suffix(".html")]


def main() -> int:
    site_root = Path(sys.argv[1] if len(sys.argv) > 1 else "site").resolve()
    if not site_root.is_dir():
        print(f"Site directory not found: {site_root}", file=sys.stderr)
        return 2

    broken: list[str] = []
    checked = 0
    for source in sorted(site_root.rglob("*.html")):
        parser = LinkParser()
        parser.feed(source.read_text(encoding="utf-8"))
        for attribute, raw_url in parser.links:
            candidates = target_candidates(source, raw_url, site_root)
            if not candidates:
                continue
            checked += 1
            if not any(candidate.exists() for candidate in candidates):
                location = source.relative_to(site_root).as_posix()
                broken.append(f"{location}: {attribute}=\"{raw_url}\"")

    if broken:
        print("Broken generated-site links:", file=sys.stderr)
        for item in broken:
            print(f"  - {item}", file=sys.stderr)
        return 1

    print(f"Internal link audit passed: {checked} generated links and assets checked.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

