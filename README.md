# The World in One Day — Wednesday, 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Ranger-putih/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Ranger-putih/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the [make.fun bounty "Sum up 25 November's world news in one image"](https://make.fun/bounty/news-image-20261125).

## The paper

A one-page newspaper front page, composed with Python PIL — every word
is rendered by PIL, sharp and exact, and no image model was allowed to
draw text. It sums up Wednesday 25 November 2026 — six stories from
across the world, plus a ticker of two more:

- **Tankers ablaze in the Strait of Hormuz** — two oil tankers hit naval
  mines and caught fire, Iran's Revolutionary Guard says. The vessels had
  taken an unauthorised route through the strait, it said.
- **Houthi drone hits Riyadh tower** — eleven people are injured in the
  King Abdullah Financial District. The Houthis also say they struck the
  Ras Tanura oil refinery.
- **Drones set two Russian refineries ablaze** — Syzran and Kuibyshev burn
  overnight. A Russian strike on Odesa kills two and injures three.
- **Huawei convicted in U.S. trial** — a Brooklyn jury convicts the Chinese
  tech firm on 10 of 12 counts, including bank fraud and trade-secret theft.
- **Asian stocks plunge** — KOSPI -6.2%, Nikkei -2.8% as chip shares sink;
  the Dow closes above 50,000 for the first time.
- **Shenzhou-24 docks with Pakistan's first astronaut** — China's crew
  ship reaches the Tiangong station carrying the first Pakistani — and the
  first foreign astronaut — into orbit.

## Running it

`main.ts` (Node 22) copies the finished `entry.png` to `/output/entry.png`.
The copy is deterministic — run it twice and the bytes are identical.
It uses no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
