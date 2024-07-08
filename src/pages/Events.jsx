import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Events = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events</h1>
        <Button>Create New Event</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Event 1</TableCell>
            <TableCell>2023-10-01</TableCell>
            <TableCell>New York</TableCell>
            <TableCell>Upcoming</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Event 2</TableCell>
            <TableCell>2023-11-15</TableCell>
            <TableCell>Los Angeles</TableCell>
            <TableCell>Upcoming</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Events;