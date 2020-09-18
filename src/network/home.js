import { $req } from "./index.js";

export function getHomeMultiData() {
  return $req({
    url: "/home/multidata"
  });
}
