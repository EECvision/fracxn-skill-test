const classes = {
  container: `
    w-full
    max-w-screen-2xl
    flex flex-col md:flex-row
    justify-between
    items-center
    gap-24
  `,
  about: `
    w-full
    md:max-w-lg xl:max-w-2xl
    flex flex-col
    justify-start
    items-start
    gap-4 lg:gap-8
    pl-4 lg:pl-8
    pr-4
  `,
  title: `
    text-2xl xs:text-4xl md:text-2xl lg:text-4xl xl:text-5xl
    font-bold
    leading-normal
  `,
  accent: `
    text-accent
  `,
  description: `
    text-lg
  `,
  btn: `
    flex
    items-center
    justify-center
    gap-2
    w-max
    py-2 px-4
    rounded-md
    border border-accent
    bg-gradient-to-r from-grad-1 to-grad-2
  `,
  demo: `
    w-full
    flex flex-col
    items-center
    justify-center
  `,
};
export default classes;

// card: `
// lg:w-3/4 xl:w-full
// z-10
// relative
// `,
// token1: `
// absolute
// -top-12
// -left-20
// `,
// token2: `
// absolute
// top-0
// right-0
// -translate-y-1/2
// `,
// token3: `
// absolute
// bottom-2
// -left-40
// `,
// robot: `
// w-3/4
// translate-x-24
// `
