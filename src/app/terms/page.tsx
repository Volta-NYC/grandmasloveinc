import type { Metadata } from "next";
import { PolicyPage } from "@/lib/components/PolicyPage";
import { policies } from "@/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions for using the Grandma's Love, Inc. website.",
};

export default function TermsPage() {
  return <PolicyPage policy={policies.terms} />;
}
