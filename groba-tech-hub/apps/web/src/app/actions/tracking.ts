"use server";

import { headers } from "next/headers";

export async function trackLeadEvent(sourceData: { origin: string; phoneClicked: string }) {
    const reqHeaders = await headers();
    const userAgent = reqHeaders.get("user-agent") || "unknown";

    // Try to get IP from headers in a proxy/docker environment
    const ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "127.0.0.1";

    const fbp = reqHeaders.get("cookie")?.match(/_fbp=([^;]+)/)?.[1] || "";
    const fbc = reqHeaders.get("cookie")?.match(/_fbc=([^;]+)/)?.[1] || "";

    // Structure recommended by Meta Conversion API (CAPI)
    const capiPayload = {
        data: [
            {
                event_name: "Lead",
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                user_data: {
                    client_ip_address: ip,
                    client_user_agent: userAgent,
                    fbp: fbp || undefined,
                    fbc: fbc || undefined,
                },
                custom_data: {
                    currency: "BRL",
                    lead_source: sourceData.origin,
                    button_clicked: sourceData.phoneClicked
                }
            }
        ]
    };

    console.log("[Server Action] Payload de Lead CAPI gerado:", JSON.stringify(capiPayload, null, 2));

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    try {
        const response = await fetch(`${API_URL}/leads`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(capiPayload)
        });
        const result = await response.json();
        console.log("[CAPI] Backend response:", result);
    } catch (error) {
        console.error("[CAPI] Error sending lead to backend:", error);
    }

    return { success: true, message: "Evento registrado com sucesso" };
}
