export default function PageLayout({ children}) {
  return (
    <div
      className={` lg:py-3 pt-16 lg:px-[30px] px-4 max-w-[93rem] mx-auto`}
    >
      {children}
    </div>
  );
}
