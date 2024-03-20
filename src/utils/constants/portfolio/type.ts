export interface Task {
    id: number;
    label: string;
}

export interface PortfolioList {
    id: number;
    imageUrl: string;
    imageTablet: string;
    title: string;
    assignedTasks: string;
    listTask: Task[];
    deadline: string;
}
