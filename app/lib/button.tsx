import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";

export function SendCrewId({ id } : { id: number }) {
    return(
        <Link 
            href={`/dashboard/crews/${id}`}
        >
            <EditIcon />
        </Link>
    );
}
export function SendEmployeeId({ id } : { id: number }) {
    return(
        <Link 
            href={`/dashboard/employees/${id}`}
        >
            <EditIcon />
        </Link>
    );
}
export function SendEquipmentId({ id } : { id: number }) {
    return(
        <Link 
            href={`/dashboard/equipment/${id}`}
        >
            <EditIcon />
        </Link>
    );
}
export function SendTimesheetId({ id } : { id: number }) {
    return(
        <Link 
            href={`/dashboard/timesheets/${id}`}
        >
            <EditIcon />
        </Link>
    );
}
