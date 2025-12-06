import { FaUser } from "react-icons/fa";

const UserOverView = () => {
  return (
    <section className="w-full flex-1 rounded-2xl shadow-lg p-5 bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col items-center gap-3 text-white">
        {/* Icon */}
        <span className="text-4xl text-white">
          <FaUser />
        </span>

        {/* Total */}
        <span className="text-3xl font-bold">10</span>

        {/* Label */}
        <label className="text-sm tracking-wide text-neutral-600 dark:text-neutral-300">
          USER
        </label>
      </div>
    </section>
  );
};

export default UserOverView;
