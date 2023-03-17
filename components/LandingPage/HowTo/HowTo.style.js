const classes = {
  container: `
    w-full
    max-w-screen-2xl
    flex flex-col lg:flex-row
    items-center
    justify-between
    gap-12
    px-4 lg:px-8
    mb-24
  `,
  lhs: `
    w-full
    lg:max-w-3xl
    flex flex-col
    items-start
    justify-center
    gap-8
  `,
  tagContainer: `
    flex
    gap-2
  `,
  title: `
    text-2xl xs:text-4xl md:text-2xl lg:text-4xl xl:text-5xl
    font-bold
    leading-normal
  `,
  accent: `
    text-accent
    whitespace-nowrap
  `,
  description: `
    text-lg
  `,
  btn: `
    py-2 px-8
    rounded-lg
    hidden lg:block
    border border-accent
    bg-gradient-to-r from-grad-1 to-grad-2
  `,
  btnMobile: `
    self-start
    py-2 px-8
    rounded-lg
    lg:hidden
    border border-accent
    bg-gradient-to-r from-grad-1 to-grad-2
    mt-8
  `,
  rhs: `
  `,
};

export default classes;
