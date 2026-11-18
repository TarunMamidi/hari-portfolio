
import React from "react";
import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.55, ease: "easeInOut" },
      }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          H<span></span>P<span>.</span>
        </motion.div>

        <div className="loader-progress">
          <motion.div
            className="loader-progress-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="loader-caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          LOADING PORTFOLIO
        </motion.p>
      </div>
    </motion.div>
  );
}
