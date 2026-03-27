import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
         "DevOps Engineer 🚀",
      "AWS Cloud Engineer ☁️",
      "Kubernetes (K8s) Enthusiast ⚙️",
      "CI/CD Pipeline Builder 🔁",
      "Infrastructure as Code (Terraform) 🏗️",
      "Docker & Containerization Expert 🐳"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
