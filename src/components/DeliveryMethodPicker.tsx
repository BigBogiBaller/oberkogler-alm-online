import { Package, Truck } from "lucide-react";
import type { DeliveryMethod } from "@/lib/shopify";

interface DeliveryMethodPickerProps {
  value: DeliveryMethod;
  onChange: (method: DeliveryMethod) => void;
  compact?: boolean;
}

const DeliveryMethodPicker = ({ value, onChange, compact = false }: DeliveryMethodPickerProps) => {
  return (
    <div className={`flex gap-2 ${compact ? '' : 'w-full'}`}>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onChange('pickup'); }}
        className={`flex items-center gap-2 px-3 py-2 rounded-md border-2 text-sm font-medium transition-colors flex-1 justify-center ${
          value === 'pickup'
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-background text-foreground hover:border-primary/50'
        }`}
      >
        <Package className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} />
        Abholung
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onChange('delivery'); }}
        className={`flex items-center gap-2 px-3 py-2 rounded-md border-2 text-sm font-medium transition-colors flex-1 justify-center ${
          value === 'delivery'
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-background text-foreground hover:border-primary/50'
        }`}
      >
        <Truck className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} />
        Lieferung
      </button>
    </div>
  );
};

export default DeliveryMethodPicker;
