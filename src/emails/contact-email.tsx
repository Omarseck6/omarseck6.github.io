import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import type { ContactInput } from "@/lib/contact-schema";

export function ContactEmail({ name, email, subject, message }: ContactInput) {
  return (
    <Html><Head /><Preview>New portfolio inquiry from {name}</Preview>
      <Body style={{ backgroundColor: "#090909", color: "#ffffff", fontFamily: "Arial, sans-serif", padding: "40px 16px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#130909", border: "1px solid #3a1a1e", borderRadius: "18px", padding: "36px" }}>
          <Text style={{ color: "#b11226", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px" }}>New project inquiry</Text>
          <Heading style={{ fontSize: "30px", margin: "10px 0 28px" }}>{subject}</Heading>
          <Section><Text style={{ color: "#cfcfcf" }}><strong style={{ color: "#fff" }}>From:</strong> {name} · {email}</Text></Section>
          <Hr style={{ borderColor: "#3a1a1e", margin: "24px 0" }} />
          <Text style={{ color: "#cfcfcf", fontSize: "16px", lineHeight: "1.7", whiteSpace: "pre-wrap" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
