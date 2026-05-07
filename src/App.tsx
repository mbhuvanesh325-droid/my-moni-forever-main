import bg from "@/assets/bg-purple.jpg";
import monisha from "@/assets/monisha.png";
import { Nav } from "@/components/Nav";
import { FloatingHearts } from "@/components/FloatingHearts";
import { ChevronDown, Heart } from "lucide-react";

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-violet-deep">
      <Heart className="mt-1 h-4 w-4 flex-shrink-0 text-violet-mid float-y" fill="currentColor" />
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen w-full">
      {/* PAGE 1 */}
      <section
        id="page1"
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Nav active="home" />
        <FloatingHearts count={12} />

        {/* Fixed bottom-left photo */}
        <img
          src={monisha}
          alt="Monisha portrait with lavender flowers"
          className="absolute bottom-0 left-0 z-10 w-[260px] md:w-[360px] h-auto object-contain pointer-events-none select-none"
          style={{ filter: "drop-shadow(0 20px 50px rgba(139,92,246,0.55))" }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8">
          {/* Right text */}
          <div className="max-w-md text-center md:text-left">
            <p className="font-script text-4xl text-violet-mid fade-up" style={{ animationDelay: "0.2s" }}>
              Hey, <span className="inline-block float-y2">♡</span>
            </p>
            <h1
              className="font-serif text-6xl md:text-7xl font-bold text-violet-deep mt-1 fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Monisha
            </h1>
            <div className="my-5 flex items-center justify-center md:justify-start gap-3 fade-up" style={{ animationDelay: "0.6s" }}>
              <div className="h-px w-16 bg-[oklch(0.5_0.2_295/0.5)]" />
              <Heart className="h-4 w-4 text-violet-mid" fill="currentColor" />
              <div className="h-px w-16 bg-[oklch(0.5_0.2_295/0.5)]" />
            </div>

            <p className="text-violet-deep fade-up" style={{ animationDelay: "0.8s" }}>
              You mean the <em className="font-script text-2xl text-violet-mid">world</em> to me.
            </p>
            <p className="mt-4 text-violet-deep/90 fade-up" style={{ animationDelay: "1s" }}>
              Un kitta sollanum nu romba naal wait pannitu iruken...
            </p>
            <p className="mt-4 text-violet-deep/90 fade-up" style={{ animationDelay: "1.2s" }}>
              Nee vandha dhan en <strong className="text-violet-mid">life complete</strong> ah feel aagudhu...
            </p>

            <div className="mt-8 fade-up" style={{ animationDelay: "1.4s" }}>
              <a
                href="#page2"
                className="btn-love inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium"
              >
                Click Pannalama? 😊
              </a>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <a
          href="#page2"
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center text-violet-deep/80 hover:text-violet-deep transition"
        >
          <span className="float-y inline-flex h-7 w-7 items-center justify-center rounded-full border border-violet-deep/40">
            <ChevronDown className="h-4 w-4" />
          </span>
          <span className="mt-1 text-xs">Scroll Down</span>
        </a>

        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-between px-10 text-xs text-violet-deep/70">
          <span />
          <Heart className="h-4 w-4 text-violet-mid float-y" fill="currentColor" />
          <span>01 / 02</span>
        </div>
      </section>

      {/* PAGE 2 */}
      <section
        id="page2"
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
      >
        <Nav active="feelings" />
        <FloatingHearts count={10} />

        <div className="relative z-10 mx-auto max-w-6xl px-8 pt-32 pb-24">
          <div className="text-center fade-up">
            <h2 className="font-script text-5xl text-violet-deep">
              Kella Description <span className="text-violet-mid">💜</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="h-px w-20 bg-[oklch(0.5_0.2_295/0.5)]" />
              <Heart className="h-3 w-3 text-violet-mid" fill="currentColor" />
              <div className="h-px w-20 bg-[oklch(0.5_0.2_295/0.5)]" />
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="space-y-6 fade-up" style={{ animationDelay: "0.2s" }}>
              <Item>
                <strong>Moni...!!</strong><br />
                Enna nu thrla Ennaku<br />
                Un kuda iruka apo Nah <strong className="text-violet-mid">Romba Unmaiya</strong> iruka marii feel pandra...!!
              </Item>
              <Item>
                Un kitta rdhəo oru <strong className="text-violet-mid">Positive vibe</strong> iruku nah
              </Item>
              <Item>
                En life la Niraiya Ezhathurukan<br />
                But Ine <strong className="text-violet-mid">En Life marum</strong> nu ninaikura
              </Item>
              <Item>
                Nee okiee solla matta nu ennaku Theriyum<br />
                But <strong className="text-violet-mid">I Can't</strong> ennala en Feelings Ah Express panna mudiyala
              </Item>
            </div>

            <div className="space-y-6 fade-up" style={{ animationDelay: "0.4s" }}>
              <Item>
                Nee enna solluva nu theriyala<br />
                But nee <strong className="text-violet-mid">Okiee</strong> nu sonna<br />
                Niraiya Peru Solluvaga
              </Item>
              <Item>
                Apadi pathupen ippadi pathupen nu but ennaku en <strong className="text-violet-mid">Dream gurl</strong> ah<br />
                Enaku Oru ponnu porandha eppadi pathupen oh adhey marii en <strong className="text-violet-mid">Dream Gurl</strong> ah pathukanum nu aasa...!!
              </Item>
              <Item>
                Unnaku Enna thoonudho sollu<br />
                <strong className="text-violet-mid">Wait pandra</strong>...!!
              </Item>
            </div>
          </div>

          {/* Love card */}
          <div className="mt-16 flex justify-center fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card relative max-w-md rounded-2xl border-2 border-dashed border-[oklch(0.55_0.2_295/0.6)] px-12 py-8 text-center pulse-glow">
              <Heart className="absolute -top-4 left-1/2 h-7 w-7 -translate-x-1/2 text-violet-mid float-y" fill="currentColor" />
              <p className="font-serif text-2xl text-violet-deep">I Love You</p>
              <p className="font-script text-6xl text-violet-mid mt-1">Monisha</p>
              <p className="mt-3 font-script text-xl text-violet-deep">
                Kalyanam pannikalama....!! 💍
              </p>
              <Heart className="absolute -left-4 top-1/2 h-6 w-6 text-violet-mid float-y2" fill="currentColor" />
              <Heart className="absolute -right-4 top-1/2 h-6 w-6 text-violet-mid float-y" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-between px-10 text-xs text-violet-deep/70">
          <a href="#page1" className="rounded-full border border-violet-deep/30 px-3 py-1 hover:bg-white/40 transition">
            ← Back
          </a>
          <Heart className="h-4 w-4 text-violet-mid float-y" fill="currentColor" />
          <span>02 / 02</span>
        </div>
      </section>
    </main>
  );
}
