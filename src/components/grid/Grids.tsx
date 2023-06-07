import { useDispatch, useSelector } from "react-redux";
import "./Grid.css";
import { setHover, setRowColGrid } from "../redux/reducer/gridModalSlice";
type Props = {};

const numRows = 5;
const numCols = 6;

const Grids = (_props: Props) => {
    const rowCols = useSelector((state: any) => state.grid);
    const dispath = useDispatch();
    console.log(rowCols);

    const grid = [];
    for (let row = 1; row <= numRows; row++) {
        for (let col = 1; col <= numCols; col++) {
            grid.push(
                <div
                    onClick={() => dispath(setRowColGrid({ row, col }))}
                    onMouseEnter={() =>
                        dispath(
                            setHover({ rowSelected: row, colSelected: col })
                        )
                    }
                    className={
                        row <= rowCols.rowSelected && col <= rowCols.colSelected
                            ? "rowhover row "
                            : "row "
                    }
                    key={`${row}+${col}`}
                >
                    i
                </div>
            );
        }
    }

    return <div className="grid">{grid}</div>;
};

export default Grids;
