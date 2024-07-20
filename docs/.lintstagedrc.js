export default {
  "*.ts?(x)": (files) => {
    const joinedFiles = files.join(" ");
    return [
      `eslint --max-warnings=0 --no-warn-ignored ${joinedFiles}`,
      `prettier --write ${joinedFiles}`,
      `vitest related --run ${joinedFiles}`,
      "tsc --noEmit",
    ];
  },
};
