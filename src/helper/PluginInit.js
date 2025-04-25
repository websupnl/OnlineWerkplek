"use client";
import { useEffect } from "react";
export default function PluginInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("react-quill/dist/quill.snow.css");
      require("react-toastify/dist/ReactToastify.css");
      require("react-modal-video/css/modal-video.min.css");
      require("../../public/assets/css/jsvectormap.css");


    }
  }, []);
  return <></>;
}
