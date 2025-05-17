export const Container = ({ children, page, className }) => {
  return (
    <div
      className={`flex justify-center w-screen dark:bg-brand-dark dark:text-brand-dark ${
        page ? "h-[calc(100vh-4rem)]" : "h-auto"
      } ${className}`}
    >
      <div className="w-[1200px]">{children}</div>
    </div>
  );
};
