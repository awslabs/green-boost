export default {
  "*.ts?(x)": (files) => [`eslint --fix --max-warnings=0 ${files}`, `vitest related ${files}`, "tsc --noEmit"]
}