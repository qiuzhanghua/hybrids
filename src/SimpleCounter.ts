import { define, html } from "hybrids";

interface SimpleCounter {
  count: number;
}

export function increaseCount (host: SimpleCounter) {
  host.count += 1;
}

export default define<SimpleCounter>({
  tag: "simple-counter",
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">Count: ${count}</button>
  `
});
