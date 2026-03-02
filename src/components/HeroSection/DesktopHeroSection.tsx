import { Box, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/EBT_4anos_1920x850px_SITE.webp";
import { getLineShadowCss } from "@/utils/utils";
import { EBTLogo } from "../EBTLogo/EBTLogo";
import { Animate } from "../Animate";
import { ScrollButton } from "../ScrollButton";
import Image from "next/image";

export interface IDesktopHeroSectionProps {}

export const DesktopHeroSection = (props: IDesktopHeroSectionProps) => {
  return (
    <Box sx={{ height: "100svh", backgroundColor: "#000", position: "relative" }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            quality={100}
            unoptimized
            priority
            src={bgImage.src}
            alt="Bibo"
            fill
            objectFit="contain"
            objectPosition="top center"
          />
        </Box>
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
        }}
      >
        <Container
          sx={{
            height: "100%",
            pt: 4,
            pb: 17,
          }}
          maxWidth="xl"
        >
          <Stack height="100%" justifyContent="flex-start">
            <EBTLogo height={30} />

            <Stack
              gap={2}
              alignItems="flex-start"
              justifyContent="flex-end"
              sx={{ height: "62svh" }}
            >
              <Typography
                color="white"
                variant="h1"
                sx={{
                  textShadow: "0 2px 12px rgba(0,0,0,0.85)",
                  "& strong.outlined": {
                    fontSize: 128,
                    position: "relative",
                    zIndex: 1,

                    "&::before": getLineShadowCss({
                      text: "simples",
                      lineColor: "white",
                      textColor: "black",
                      transform: "translate(-5%, -25%)",
                      fontSize: 200,
                    }),
                  },
                }}
              >
                <Animate
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  Chegou a hora de você
                  <br />
                  <strong style={{ zIndex: 99, position: "relative" }}>
                    Aprender Teologia
                  </strong>{" "}
                  de maneira
                  <br />
                </Animate>
                <Animate
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <strong className="outlined">simples</strong>
                </Animate>
              </Typography>

              <Animate
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <ScrollButton
                  targetSection="planos"
                  variant="contained"
                  id="cta-hero"
                >
                  ESTUDE CONOSCO
                </ScrollButton>
              </Animate>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
