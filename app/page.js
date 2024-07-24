import Header from "@/components/Header";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({ canonicalUrlRelative: "/" });

export default function Landing() {
  return (
    <>
      <Header /> 
      <main
        className="min-h-screen p-12 pb-24 text-center"
        data-theme="dark"
      >
        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Send and receive course material 🧑‍🏫
          </h1>

          <p className="text-lg leading-relaxed text-base-content/80">
            Our platform lets you teach courses remotely across any device.
          </p>

          <img
            src="https://unsplash.com/illustrations/friendly-teacher-woman-stand-at-blackboard-explain-lesson-isolated-on-white-background-young-female-tutor-character-wear-formal-suit-teach-students-in-school-class-cartoon-people-vector-illustration-miVw6M4YEOk"
            alt="Vegetables"
            width={500}
            height={250}
            className="rounded-lg mx-auto"
          />

          <button className="btn btn-primary btn-wide">Get started</button>
        </section>
      </main>
    </>
  );
}