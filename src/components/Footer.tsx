export default function Footer() {
  return (
    <footer className="w-full bg-green-200 dark:bg-slate-700 mt-10">
      <h3 className="text-xl text-center mb-10 p-2">
        How To Find awesome Books like these ? <br /> Connect with Us
      </h3>
      <div className="container p-4 flex items-center justify-center">
        <ul className="grid grid-cols-2 gap-x-6 text-base [&>*]:cursor-pointer">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>History Of Us</li>
          <li>Other Books</li>
        </ul>
      </div>
    </footer>
  );
}
