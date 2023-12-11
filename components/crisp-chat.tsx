"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ca8fe983-7f29-48e1-b9f6-0e192b8a465b");
  }, []);
  return null;
};

export default CrispChat;
