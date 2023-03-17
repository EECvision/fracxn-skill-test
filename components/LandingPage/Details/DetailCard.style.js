const classes = {
  container: `
    w-full
    flex
    justify-start
    gap-2
  `,
  wrapper: `
    h-auto
    p-4
    rounded-xl
    mb-8
    bg-card
    border-dashed border-2 border-faint
  `,
  title: `
    text-base
    mb-4
    cursor-pointer
  `,
  description: (isActive) => `
    ${isActive ? "h-auto" : "h-0 overflow-hidden"}
  `,
};

export default classes;
