export const editBox = ({ children, edit }) => {
  return <>{edit ? <input value={children} /> : <p>{children}</p>}</>;
};
