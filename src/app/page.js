import styles from "./page.module.css";

async function fetchData() {
  console.log("Node.js environment");
  console.table({
    NODE_ENV: process.env.NODE_ENV,
    ENV_VAR: process.env.ENV_VAR,
    ENV_VAR_LOCAL: process.env.ENV_VAR_LOCAL,
    ENV_VAR_DEVELOPMENT: process.env.ENV_VAR_DEVELOPMENT,
    ENV_VAR_PRODUCTION: process.env.ENV_VAR_PRODUCTION,
  });
  return {};
}

export default async function Home() {
  await fetchData();
  console.log("Browser environment");
  console.table({
    NODE_ENV: process.env.NODE_ENV,
    ENV_VAR: process.env.ENV_VAR,
    ENV_VAR_LOCAL: process.env.ENV_VAR_LOCAL,
    ENV_VAR_DEVELOPMENT: process.env.ENV_VAR_DEVELOPMENT,
    ENV_VAR_PRODUCTION: process.env.ENV_VAR_PRODUCTION,
  });
  return (
    <main className={styles.main}>
      <pre>
        <code>
          {JSON.stringify({
            NODE_ENV: process.env.NODE_ENV,
            ENV_VAR: process.env.ENV_VAR,
            ENV_VAR_LOCAL: process.env.ENV_VAR_LOCAL,
            ENV_VAR_DEVELOPMENT: process.env.ENV_VAR_DEVELOPMENT,
            ENV_VAR_PRODUCTION: process.env.ENV_VAR_PRODUCTION,
          }, null, 4)}
        </code>
      </pre>
    </main>
  );
}
