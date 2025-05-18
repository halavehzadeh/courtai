
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ProductDetails } from "./ProductUpload";

interface ProductFormProps {
  productDetails: ProductDetails;
  onProductDetailsChange: (details: Partial<ProductDetails>) => void;
}

const productCategories = [
  { value: "kitchen", label: "Kitchen Appliances & Cookware" },
  { value: "electronics", label: "Electronics & Gadgets" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing & Textiles" },
  { value: "toys", label: "Toys & Children's Products" },
  { value: "health", label: "Health & Beauty" },
  { value: "food", label: "Food Products" },
  { value: "other", label: "Other" }
];

const countries = [
  "Canada",
  "United States",
  "China",
  "India",
  "Japan",
  "South Korea",
  "Germany",
  "United Kingdom",
  "France",
  "Italy",
  "Mexico",
  "Brazil",
  "Other"
];

const ProductForm = ({ productDetails, onProductDetailsChange }: ProductFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="product-name">Product Name</Label>
        <Input
          id="product-name"
          value={productDetails.name}
          onChange={(e) => onProductDetailsChange({ name: e.target.value })}
          placeholder="e.g. Stainless Steel Cooking Pot"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="product-category">Product Category</Label>
        <Select 
          value={productDetails.category}
          onValueChange={(value) => onProductDetailsChange({ category: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {productCategories.map((category) => (
                <SelectItem 
                  key={category.value} 
                  value={category.value}
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="product-materials">Materials</Label>
        <Input
          id="product-materials"
          value={productDetails.materials}
          onChange={(e) => onProductDetailsChange({ materials: e.target.value })}
          placeholder="e.g. Stainless Steel, Aluminum, Silicone Handles"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="country-of-origin">Country of Origin</Label>
        <Select 
          value={productDetails.countryOfOrigin}
          onValueChange={(value) => onProductDetailsChange({ countryOfOrigin: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select country of origin" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {countries.map((country) => (
                <SelectItem 
                  key={country} 
                  value={country}
                >
                  {country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="product-description">Product Description</Label>
        <Textarea
          id="product-description"
          value={productDetails.description}
          onChange={(e) => onProductDetailsChange({ description: e.target.value })}
          placeholder="Provide details about your product, including its purpose, features, and specifications."
          className="mt-1 min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default ProductForm;
