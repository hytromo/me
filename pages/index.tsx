import Head from "next/head";
import React from "react";
import Layout from "../components/Layout/layout";
import cv from "../public/cv.json";
import { Skill } from "../components/Skill/Skill";
import { Section } from "../components/Section/Section";
import { TitlesMenu } from "../components/TitlesMenu/TitlesMenu";
import { Workplace } from "../components/Workplace/Workplace";
import { Project } from "../components/Project/Project";
import { Award } from "../components/Award/Award";
import { ImageWithFallback } from "../components/Image/ImageWithFallback";

const titles = {
  about: "about me",
  skills: cv.headings.skills,
  experience: cv.headings.work,
  projects: cv.headings.projects,
  awards: cv.headings.awards,
  papers: cv.headings.papers,
  volunteering: cv.headings.volunteering,
};

export default function Home() {
  const work = React.useMemo(
    () => [
      ...cv.work,
      {
        company: "Born",
        position: "Infant",
        location: "Chania, Greece",
        startDate: "Jul 1994",
        highlights: ["Lots of crying"],
        website:
          "https://www.google.com/maps/place/Chania/@35.5075659,24.0072304,14z/data=!3m1!4b1!4m5!3m4!1s0x149c7dbee0cf3f3b:0x94b3557d79cd2ca8!8m2!3d35.5138298!4d24.0180367",
      },
    ],
    []
  );

  return (
    <Layout>
      <Head>
        <title>{cv.basics.name}</title>
      </Head>
      <TitlesMenu titles={Object.values(titles)} />
      <Section title={titles.about}>
        <p>I've been programming since my early teens and I can't stop :(</p>
        <p>
          Since then, I've been using and enjoying Linux, which also made me
          love working on a terminal. Of course, I also{" "}
          <span style={{ fontStyle: "italic" }}>root</span> for well-built GUIs
          that provide value and ease of use to the entire team.
        </p>
        <p>
          I've worked in software development (mostly web and desktop) and in
          devops roles, so I would be in my comfort zone working on these.
          However, what I'm really interested into, is taking on new challenges
          and working with awesome, skilled teams where I have a lot to learn
          and a lot to give! I believe in establishing a good company culture
          where knowledge sharing is the norm; and not using knowledge as a
          status symbol.
        </p>
        <p>
          I'm Greek so I like sand even if it's coarse and rough and irritating
          and it gets everywhere. Also, souvlaki.
        </p>
        <p>
          Gray is my favorite color because it reminds me that nothing is black
          or white. And because I have a goofy gray cat.
        </p>
      </Section>
      <Section title={titles.skills}>
        {cv.skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </Section>
      <Section title={titles.experience}>
        {work.map((workplace, index) => (
          <Workplace
            key={index}
            work={workplace}
            isFirst={index === 0}
            isLast={index === work.length - 1}
          />
        ))}
      </Section>
      <Section title={titles.projects}>
        {cv.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Section>
      <Section title={titles.awards}>
        {cv.awards.map((award, index) => (
          <Award key={index} award={award} />
        ))}
      </Section>
      <Section title={titles.papers}>
        {cv.papers.map((paper, index) => (
          <Project key={index} project={paper} />
        ))}
      </Section>
      <Section title={titles.volunteering}>
        {cv.volunteering.map((volunteering, index) => (
          <Workplace
            key={index}
            work={volunteering}
            isFirst={index === 0}
            isLast={index === cv.volunteering.length - 1}
          />
        ))}
      </Section>

      <p style={{ textAlign: "center" }}>
        Made it till here? Here's my gray goofy cat!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageWithFallback
          extraStyle={{ borderRadius: "5px" }}
          src="goofy-cat.webp"
          fallbackExtension="jpeg"
          alt="My goofy cat"
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          fontWeight: "bold",
          margin: "10rem 0 2rem 0",
        }}
      >
        <a
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          BACK TO TOP
        </a>
      </div>
    </Layout>
  );
}
