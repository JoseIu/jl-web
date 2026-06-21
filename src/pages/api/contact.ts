import type { APIRoute } from "astro";
import { Resend } from "resend";
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nombre, email, asunto } = await request.json();
    console.log({ nombre, email, asunto });

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["joselu.dev97@gmail.com"],
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${asunto}</p>
    `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};
