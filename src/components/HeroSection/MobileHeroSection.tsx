import { Box, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/EBT_4anos_630x850px_SITE-MOBILE.webp";
import { getLineShadowCss } from "@/utils/utils";
import { EBTLogo } from "../EBTLogo/EBTLogo";
import { Animate } from "../Animate";
import { ScrollButton } from "../ScrollButton";
import Image from "next/image";

export interface IMobileHeroSectionProps {}

export const MobileHeroSection = (props: IMobileHeroSectionProps) => {
  return (
    <Box sx={{ height: "100svh", backgroundColor: "#000" }}>
      <Box
        sx={{
          height: "60%",
          width: "100%",
          position: "absolute",
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
            objectFit="cover"
            objectPosition="right"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to bottom, transparent, #000)",
              zIndex: 1,
            }}
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
            pb: "20svh",
          }}
        >
          <Stack height="100%" justifyContent="space-between">
            <EBTLogo height={30} />

            <Stack gap={2} alignItems="flex-start">
              <Typography
                color="white"
                variant="h1"
                sx={{
                  "& strong.outlined": {
                    fontSize: 74,
                    position: "relative",
                    zIndex: 1,

                    "&::before": getLineShadowCss({
                      text: "simples",
                      lineColor: "white",
                      textColor: "black",
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
