export default function Footer() {
  return (
    <footer className="w-full bg-green-200 mt-10">
      <h3 className="text-3xl text-center mb-10 p-2">
        How To Find awesome Books like these ? <br /> Connect with Us
      </h3>
      <div className="container p-4">
        <ul className="flex items-center justify-between text-xl [&>*]:cursor-pointer">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>History Of Us</li>
          <li>Other Books</li>
        </ul>
      </div>
    </footer>
  );
}
