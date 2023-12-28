// index.d.ts
declare module "chia-fee-estimator" {
  interface Config {
    certificate_folder_path?: string;
    full_node_host?: string;
    default_fee?: number;
  }

  function configure(newConfig: Partial<Config>): void;

  function getFeeEstimate(config?: Config): Promise<number>;

  export { configure, getFeeEstimate };
}
