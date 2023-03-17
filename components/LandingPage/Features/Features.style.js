const classes = {
  container: `
    w-full
    max-w-screen-2xl
    px-4 lg:px-8
    mb-16 lg:mb-32
  `,
  wrapper: `
    mt-8
    flex flex-col lg:flex-row
    justify-between
    gap-8 lg:gap-24
  `,
  lhs: `
    w-full
  `,
  title: `
    text-2xl xs:text-4xl md:text-2xl lg:text-4xl xl:text-5xl
    font-bold
    leading-normal
    mb-16 lg:mb-32
  `,
  img1: `
    w-full
    min-w-lg
    hidden lg:block
  `,
  img2: `
    w-full
    max-w-xl
    block lg:hidden
  `,
  rhs: `
  `,
  text: `
    text-lg
    mb-16 lg:mb-32
    hidden lg:block
  `,
  accent: `
    text-accent
    whitespace-nowrap
  `,
  textMobile: `
    text-lg
    mb-16 lg:mb-32
    block lg:hidden
  `,
  featuresList: `
    flex flex-col
    justify-center
    items-start
    gap-8
  `,
};

export default classes;
