import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export function EditButton({ id } : { id: number }) {
    const pathname = usePathname();
    return(
        <Link 
            href={`${pathname}/${id}`}
        >
            <EditIcon />
        </Link>
    );
}

export function CreateButton() {
    const pathname = usePathname();
    return(
        <Link
            href={`${pathname}/create`}
        >
            <AddIcon />
        </Link>
    );
}
