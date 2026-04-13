import { agents } from "@/data/agents";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function AgentDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const agent = agents.find((a) => a.slug === slug);

    if (!agent) {
        notFound();
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-32">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="relative aspect-[4/5] w-full">
                    <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-4xl font-bold mb-2 text-brand-primary dark:text-white">{agent.name}</h1>
                    <p className="text-gray-500 mb-6 dark:text-brand-white/70">{agent.location}</p>

                    <div className="space-y-2 mb-6 dark:text-brand-white/80">
                        <p><strong>Phone:</strong> {agent.phone}</p>
                        <p><strong>Email:</strong> {agent.email}</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed dark:text-brand-white/70">
                        {agent.bio}
                    </p>
                </div>
            </div>
        </main>
    );
}
