declare module "echarts" {
  export interface EChartsOption {
    [key: string]: unknown;
  }
  export interface ECharts {
    setOption(option: EChartsOption, opts?: { notMerge?: boolean; lazyUpdate?: boolean }): void;
    resize(opts?: { width?: number | "auto"; height?: number | "auto" }): void;
    dispose(): void;
    on(event: string, handler: Function): void;
    off(event: string, handler?: Function): void;
    getOption(): EChartsOption;
  }
  export function init(dom: HTMLElement, theme?: string): ECharts;
  export function connect(group: string | ECharts[]): void;
  export function disconnect(group: string): void;
  export const version: string;
}