import { Card } from "@/components/ui/card"

const programs = [
  {
    number: "01",
    title: "Preschool",
    description:
      "A nurturing environment where young learners discover the joy of learning through play-based education and foundational skills development.",
    ages: "Age 1 and above",
  },
  {
    number: "02",
    title: "Primary School",
    description:
      "Building strong academic foundations with engaging curriculum that fosters curiosity, creativity, and critical thinking skills.",
    ages: "Basic 1 - 6",
  },
  {
    number: "03",
    title: "Junior High School",
    description:
      "Guiding students through transformative years with comprehensive programs that develop independence, leadership, and academic excellence.",
    ages: "Basic 7 - 9",
  },
  {
    number: "04",
    title: "Special School",
    description:
      "We support students with special needs, including Autism and learning challenges. Our caring teachers provide personalized guidance that builds confidence, communication, and life skills—helping every child shine in their own unique way.",
    ages: "Preschool - Basic 9",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Our Educational Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At our school, we offer a rich and balanced curriculum that combines both <b>Ghana Education Service (GES)</b> and <b>Pearson Edexcel (UK) programmes.</b><br />
            This dual approach allows our students to enjoy the best of both worlds — a strong foundation in Ghana’s national curriculum and access to internationally recognized standards.
            <br />
            Through the <b>GES</b> curriculum, learners develop essential skills in Mathematics, English, Science, and Social Studies while gaining cultural and moral education rooted in Ghanaian values.
            <br />
            Our <b>Pearson Edexcel</b> programme complements this by preparing students for international qualifications such as the IGCSE and A-Levels, opening pathways to top universities around the world.
            <br />
            We are committed to nurturing confident, knowledgeable, and globally minded learners ready to thrive anywhere in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {programs.map((program) => (
            <Card key={program.number} className="p-8 lg:p-10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl font-light text-muted-foreground">{program.number}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-semibold">{program.title}</h3>
                    <span className="text-sm text-muted-foreground">{program.ages}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
