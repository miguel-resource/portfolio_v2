"use client";
import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      params: {
        zIndex: -1,
      },
      particles: {
        number: {
          value: 100,
        },
        move: {
          enable: true,
          speed: {
            min: 0.2,
            max: 0.5,
          },
        },
        color: {
          value: "#003892",
        },
        shape: {
          type: "square",
        },
        links: {
          enable: true,
          color: '#003d61'
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
          },
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
        },
        speed: {
          value: {
            min: 0.8,
            max: 1.2,
          },
        },
        lifespan: {
          value: {
            min: 0.5,
            max: 1,
          },
        },
        random: {
          direction: true,
          speed: true,
          size: true,
          color: true,
        },
        life: {
          value: {
            min: 0.5,
            max: 1,
          },
          duration: {
            value: 1,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine: Engine) => {
    return loadSlim(engine);
  }, []);

  return (
    <section
      style={{
        zIndex: 0,
      }}
    >
      <Particles init={particlesInit} options={options} />
    </section>
  );
};

export default ParticlesBackground;
