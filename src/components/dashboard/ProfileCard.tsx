import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

type UserName = { first: string; last: string };
type UserPicture = { large: string };
type User = {
  name: UserName;
  picture: UserPicture;
  email: string;
};

export function ProfileCard({
  user,
  onLogout,
}: {
  user: User;
  onLogout: () => void;
}) {
  return (
    <motion.div
      layout
      className="flex flex-col justify-center items-center text-center flex-1 p-12 max-md:p-8 max-sm:p-6 transition-colors duration-300"
      style={{ color: "var(--dashboard-text)" }}
    >
      <motion.h1
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-[2rem] mb-4 max-md:text-[1.6rem] max-sm:text-[1.4rem]"
      >
        داشبورد
      </motion.h1>

      <motion.img
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
      />

      <motion.p
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.95rem]"
      >
        خوش آمدید
      </motion.p>

      <motion.p
        custom={4}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="font-inter mb-4"
      >
        {user.name.first} {user.name.last}
      </motion.p>

      <motion.p
        custom={5}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="font-inter text-sm text-gray-600 mb-8"
      >
        {user.email}
      </motion.p>

      <motion.div
        custom={6}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 20px rgba(0,198,255,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Button
            onClick={onLogout}
            className="font-vazir bg-[#111] dark:bg-white dark:text-black text-white font-bold rounded-lg px-6 py-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            خروج
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
