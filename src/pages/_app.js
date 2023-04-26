import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import StaticNavBar from "@/components/static_nav_bar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <StaticNavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 2,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}
