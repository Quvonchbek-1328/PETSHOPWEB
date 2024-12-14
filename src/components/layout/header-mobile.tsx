"use client"

import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeaderMobile = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${isOpen ? '' : 'pointer-events-none'
        }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={sidebar}
      />
      <motion.div className="pointer-events-auto absolute w-full top-0 z-30 h-14 bg-white" />
      <motion.div className="pointer-events-auto absolute left-4 top-[14px] z-30 font-mulish font-bold text-2xl">
        <Link href="/" className={"flex gap-x-2 items-center"}>
          <Image src="/dark-logo.svg" alt="" className={"w-10 h-10"} width={10} height={10} />
          <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">PET</span>SHOPS
          </span>
        </Link>
      </motion.div>
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-2 top-20 px-4"
      >
        <motion.li variants={MenuItemVariants}>
          <Link
            href={'/'}
            onClick={() => toggleOpen()}
            className={`flex justify-center w-full text-2xl rounded-md border border-solid border-darkblue text-darkblue/90 hover:text-white hover:bg-darkblue/90 transition-colors`}
          >
            Home
          </Link>
        </motion.li>
        <motion.li variants={MenuItemVariants}>
          <Link
            href={'/about'}
            onClick={() => toggleOpen()}
            className={`flex justify-center w-full text-2xl rounded-md border border-solid border-darkblue text-darkblue/90 hover:text-white hover:bg-darkblue/90 transition-colors`}
          >
            About
          </Link>
        </motion.li>
        <motion.li variants={MenuItemVariants}>
          <Link
            href={'/contact'}
            onClick={() => toggleOpen()}
            className={`flex justify-center w-full text-2xl rounded-md border border-solid border-darkblue text-darkblue/90 hover:text-white hover:bg-darkblue/90 transition-colors`}
          >
            Contact
          </Link>
        </motion.li>
        <motion.li variants={MenuItemVariants}>
          <Link
            href={'/jobs'}
            onClick={() => toggleOpen()}
            className={`flex justify-center w-full text-2xl rounded-md border border-solid border-darkblue text-darkblue/90 hover:text-white hover:bg-darkblue/90 transition-colors`}
          >
            Jobs
          </Link>
        </motion.li>
        <motion.li variants={MenuItemVariants}>
          <Link
            href={'/workers'}
            onClick={() => toggleOpen()}
            className={`flex justify-center w-full text-2xl rounded-md border border-solid border-darkblue text-darkblue/90 hover:text-white hover:bg-darkblue/90 transition-colors`}
          >
            Workers
          </Link>
        </motion.li>
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default HeaderMobile;


// -------------------------
const MenuToggle = ({ toggle }: { toggle: any }) => (
  <>
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-[24px] z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  </>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};