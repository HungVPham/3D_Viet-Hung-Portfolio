// global.d.ts
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
  }

declare module '*.glb' {
  const value: string;
  export default value;
}