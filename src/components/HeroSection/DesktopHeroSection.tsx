import { Box, Container, Stack, Typography } from "@mui/material";
import bgImage from "../../../public/TOPO-DE-SITE-LIVRO.png";
import { getLineShadowCss } from "@/utils/utils";
import { EBTLogo } from "../EBTLogo/EBTLogo";
import { Animate } from "../Animate";
import { ScrollButton } from "../ScrollButton";
import Image from "next/image";

export interface IDesktopHeroSectionProps {}

export const DesktopHeroSection = (props: IDesktopHeroSectionProps) => {
  return (
    <Box sx={{ position: "relative", width: "100%", backgroundColor: "#000" }}>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          maxHeight: '750px',
          aspectRatio: "16/9", // Ajuste conforme a proporção real da imagem
        }}
      >
        <Image
          quality={100}
          unoptimized
          priority
          src={bgImage.src}
          alt="Bibo"
          fill
          style={{ objectFit: "contain", objectPosition: "right" }}
        />
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
        }}
      >
        {/* <Container
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
        </Container> */}
      </Box>
    </Box>
  );
};
