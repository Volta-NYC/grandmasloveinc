import type { Metadata } from "next";
import { PolicyPage } from "@/lib/components/PolicyPage";
import { policies } from "@/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grandma's Love, Inc. collects, uses, and protects the personal information you share with us.",
};

export default function PrivacyPage() {
  return <PolicyPage policy={policies.privacy} />;
}
