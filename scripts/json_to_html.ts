import * as fs from 'fs';

interface TableColumn {
    content: string;
    align: 'left' | 'center' | 'right';
}

interface TableData {
    type: 'table';
    columns: TableColumn[];
    data: string[][];
}

interface HeadingData {
    type: 'heading';
    heading: string;
    level: number;
    content: any[];
}

interface ItemData {
    type: 'item';
    heading: string;
    subheading: string;
    content: any[];
}

interface ParagraphData {
    type: 'paragraph';
    content: string;
}

interface ListData {
    type: 'list';
    content: string[];
}

interface HorizontalRule {
    type: 'hr';
}

interface TraitsData {
    type: 'traits';
    content: string[];
}

type ParsedElement = HeadingData | ItemData | TableData | ParagraphData | ListData | HorizontalRule | TraitsData;


