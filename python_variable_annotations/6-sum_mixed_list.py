#!/usr/bin/env python3
"""Module for summing mixed list."""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Method to compute the sum of a list with mixed int and floats"""
    return sum(mxd_lst)
