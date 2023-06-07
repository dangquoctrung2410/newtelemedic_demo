export interface IModal {
    open: boolean;
    content: any | null;
    width: any;
}
export const defaultModal: IModal = {
    open: false,
    content: null,
    width: null,
};
