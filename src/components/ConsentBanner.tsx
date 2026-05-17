import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { getInitialConsentState, setConsent } from "@/lib/consent";

export function ConsentBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(getInitialConsentState);

  const handleAccept = () => {
    setConsent("accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    setConsent("rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:p-6 shadow-lg z-50"
    >
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">
            {t("consent.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("consent.description")}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="text-xs"
          >
            {t("consent.reject")}
          </Button>
          <Button size="sm" onClick={handleAccept} className="text-xs">
            {t("consent.accept")}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}