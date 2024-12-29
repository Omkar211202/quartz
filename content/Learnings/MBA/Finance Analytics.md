# Financial Modelling:
### EMI calculator



```excel
Sub EMI_SCHEDULE_CALCULATOR()
'
' EMI_SCHEDULE_CALCULATOR Macro
' Complete EMI Schedule
'
' Keyboard Shortcut: Ctrl+Shift+E
'
    Call EMI_DELETE_BORDER
    
    Range("D11").Select
    ActiveCell.FormulaR1C1 = "1"
    Range("E11").Select
    Application.CutCopyMode = False
    ActiveCell.FormulaR1C1 = "=R[-8]C[3]"
    Range("H11").Select
    Application.CutCopyMode = False
    ActiveCell.FormulaR1C1 = "=R5C11"
    Range("G11").Select
    ActiveCell.FormulaR1C1 = "=IF(R7C11=1,RC[-2]*R7C8%,RC[-2]*R7C8%/12)"
    Range("F11").Select
    Application.CutCopyMode = False
    ActiveCell.FormulaR1C1 = "=RC[2]-RC[1]"
    Range("I11").Select
    Application.CutCopyMode = False
    ActiveCell.FormulaR1C1 = "=RC[-4]-RC[-3]"
    
    'Deleting Extra Rows
    Call EMI_SCHEUDLE_CALCULATOR_ROW_DELETE
     
    'Introducing Parameter
    If Range("K7").Value = 1 Then
    end_row_final = Range("H5").Value
    Else
    end_row_final = Range("H5").Value * 12
    End If
    
    Range("D11").Select
    Selection.DataSeries Rowcol:=xlColumns, Type:=xlLinear, Date:=xlDay, _
        Step:=1, Stop:=end_row_final, Trend:=False
    Range("E12").Select
    Application.CutCopyMode = False
    ActiveCell.FormulaR1C1 = "=R[-1]C[4]"
    Range("F12:I12").Select
    Selection.FillDown
    Range("E12:I12").Select
    Selection.AutoFill Destination:=Range("E12:I" & (end_row_final + 10))
    
    Call EMI_APPLY_BORDER
    
    MsgBox ("The Schedule is given for your reference")
    
End Sub
Sub EMI_SCHEUDLE_CALCULATOR_ROW_DELETE()
'
' EMI_SCHEUDLE_CALCULATOR_ROW_DELETE Macro
' Row Deletion Automatic dynamic"&chr(13)&"
'

'
    Range("D12").Select
    Range(Selection, Selection.End(xlToRight)).Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.ClearContents
End Sub
Sub EMI_APPLY_BORDER()
'
' EMI_APPLY_BORDER Macro
' Applies Border Automatically
'

'
    Range("D11").Select
    Range(Selection, Selection.End(xlToRight)).Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.Borders(xlDiagonalDown).LineStyle = xlNone
    Selection.Borders(xlDiagonalUp).LineStyle = xlNone
    With Selection.Borders(xlEdgeLeft)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeTop)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeBottom)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeRight)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlInsideVertical)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlInsideHorizontal)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
End Sub
Sub EMI_DELETE_BORDER()
'
' EMI_DELETE_BORDER Macro
' Deletes Border Automatically
'

'
    Range("D11").Select
    Range(Selection, Selection.End(xlToRight)).Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.Borders(xlDiagonalDown).LineStyle = xlNone
    Selection.Borders(xlDiagonalUp).LineStyle = xlNone
    Selection.Borders(xlEdgeLeft).LineStyle = xlNone
    Selection.Borders(xlEdgeTop).LineStyle = xlNone
    Selection.Borders(xlEdgeBottom).LineStyle = xlNone
    Selection.Borders(xlEdgeRight).LineStyle = xlNone
    Selection.Borders(xlInsideVertical).LineStyle = xlNone
    Selection.Borders(xlInsideHorizontal).LineStyle = xlNone
End Sub



    

---
